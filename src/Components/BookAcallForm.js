import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookACall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    dateTime: null,
    duration: 30
  });

  const [submitted, setSubmitted] = useState(false);

  const generateGoogleCalendarURL = ({
    name,
    email,
    phone,
    reason,
    dateTime,
    duration
  }) => {
    const startDate = new Date(dateTime)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
    const endDate = new Date(dateTime.getTime() + duration * 60000)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");

    const details = {
      text: `Call with ${name}`,
      dates: `${startDate}/${endDate}`,
      details: `Name: ${name}\nEmail: ${email}\nReason: ${reason}`,
      location: "Zoom/Phone/Online",
      add: "nelsonosuya11@gmail.com" // 👈 your email goes here
    };

    const params = new URLSearchParams(details).toString();
    return `https://calendar.google.com/calendar/r/eventedit?${params}`;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "duration" ? parseInt(value) : value
    }));
  };

  const handleDateChange = date => {
    setFormData({ ...formData, dateTime: date });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.dateTime) {
      alert("Please select a date and time.");
      return;
    }

    setSubmitted(true);
    const url = generateGoogleCalendarURL(formData);
    window.open(url, "_blank");
  };

  return (
    <div className="book-call-container">
      {/* <h2 className="book-call-heading">📞 Book a Call</h2> */}
      {submitted
        ? <div className="book-call-success">
            ✅ Call booked successfully! We’ll reach out soon.
          </div>
        : <form onSubmit={handleSubmit} className="book-call-form">
            <div className="user-info-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />{" "}
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your mobile"
              required
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />{" "}
            <textarea
              name="reason"
              placeholder="Reason for the call"
              rows={3}
              value={formData.reason}
              onChange={handleChange}
              className="form-textarea"
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
