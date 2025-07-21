import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "../styles/BookAcallForm.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    dateTime: null,
    duration: 15
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = date => {
    setFormData(prev => ({
      ...prev,
      dateTime: date
    }));
  };

  const generateGoogleCalendarURL = data => {
    const start = new Date(data.dateTime);
    const end = new Date(start.getTime() + data.duration * 60000);
    const format = date => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    return `https://calendar.google.com/calendar/u/0/r/eventedit?text=Call+Booking+with+${encodeURIComponent(
      data.name
    )}&dates=${format(start)}/${format(end)}&details=${encodeURIComponent(
      data.reason
    )}&location=Online`;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      reason: "",
      dateTime: null,
      duration: 15
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nelsonosuya11@gmail.com",
        {
          method: "POST",
          body: payload
        }
      );

      const result = await response.json();

      if (result.success === "true" || result.result === "success") {
        toast.success("Your call was booked!");
        setSubmitted(true);
        resetForm();

        setTimeout(() => {
          const calendarURL = generateGoogleCalendarURL(formData);
          window.open(calendarURL, "_blank");
        }, 800);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Submission failed. Check your internet or try again later.");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {submitted
        ? <div className="book-call-success fade-in">
            ✅ Call booked successfully! We’ll reach out soon.
          </div>
        : <form onSubmit={handleSubmit} className="book-call-form fade-in">
            <div className="user-info-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Your Mobile"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              pattern="[0-9]{10,}"
              title="Enter a valid phone number (at least 10 digits)"
              required
            />

            <textarea
              name="reason"
              placeholder="Reason for the call"
              rows={3}
              value={formData.reason}
              onChange={handleChange}
              className="form-textarea"
              required
            />

            <div className="user-info-wrapper">
              <div className="form-group">
                <label className="form-label">Choose Date & Time</label>
                <DatePicker
                  selected={formData.dateTime}
                  onChange={handleDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select date & time"
                  className="form-input"
                  minDate={new Date()}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>1 hour</option>
                </select>
              </div>
            </div>

            <button type="submit" className="form-button">
              Confirm
            </button>
          </form>}
    </div>
  );
}
