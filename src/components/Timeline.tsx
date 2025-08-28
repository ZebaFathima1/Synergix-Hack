import { Calendar, Clock, Flag, Trophy } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "March 1, 2024",
      time: "12:00 AM",
      title: "Registration Opens",
      description: "Early bird registration with discounted rates",
      icon: <Flag className="h-5 w-5" />,
      status: "completed"
    },
    {
      date: "March 10, 2024",
      time: "11:59 PM",
      title: "Registration Closes",
      description: "Last chance to secure your spot",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "March 15, 2024",
      time: "6:00 PM",
      title: "Opening Ceremony",
      description: "Welcome, team formation, and problem statements revealed",
      icon: <Calendar className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "March 15, 2024",
      time: "8:00 PM",
      title: "Hacking Begins",
      description: "48 hours of intensive coding and innovation starts",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "March 16, 2024",
      time: "All Day",
      title: "Development & Mentorship",
      description: "Work on your projects with mentor guidance",
      icon: <Clock className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "March 17, 2024",
      time: "6:00 PM",
      title: "Submission Deadline",
      description: "Final projects must be submitted",
      icon: <Flag className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "March 17, 2024",
      time: "7:00 PM",
      title: "Presentations",
      description: "Teams present their solutions to judges",
      icon: <Calendar className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "March 17, 2024",
      time: "9:00 PM",
      title: "Closing & Awards",
      description: "Winners announced and prizes distributed",
      icon: <Trophy className="h-5 w-5" />,
      status: "upcoming"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Event <span className="gradient-primary bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow our comprehensive schedule to make the most of your SYNERGIX experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />
            
            {events.map((event, index) => (
              <div key={index} className="relative mb-8 md:mb-12">
                <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      event.status === 'completed' 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : 'bg-background border-primary text-primary'
                    }`}>
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                    <div className="gradient-card border-glow rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                      <div className="text-sm text-primary font-medium mb-1">
                        {event.date} • {event.time}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${
                        event.status === 'completed' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;