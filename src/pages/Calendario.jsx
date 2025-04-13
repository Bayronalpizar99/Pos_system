import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendario() {
  const [events, setEvents] = useState([
    { title: 'Evento 1', date: '2025-04-15' },
    { title: 'Evento 2', date: '2025-04-16' },
  ]);

  const handleDateClick = (info) => {
    // Solicita al usuario el nombre del evento
    const eventName = prompt('Ingrese el nombre del evento:');
    if (eventName) {
      // Crea un nuevo evento con el nombre ingresado
      const newEvent = { title: eventName, date: info.dateStr };
      setEvents([...events, newEvent]); // Agrega el nuevo evento al estado
    }
  };

  const handleEventClick = (info) => {
    const updatedEvents = events.filter(event => event.title !== info.event.title);
    setEvents(updatedEvents);
  };

  const handleEventDrop = (info) => {
    const updatedEvents = events.map(event =>
      event.title === info.event.title
        ? { ...event, date: info.event.startStr }
        : event
    );
    setEvents(updatedEvents);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Calendario</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        eventDrop={handleEventDrop}
        selectable={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
  );
}

export default Calendario;