const doctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', status: 'Available', color: 'bg-emerald-100 text-emerald-700', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=60' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurology', status: 'Busy', color: 'bg-amber-100 text-amber-700', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=60' },
  { id: 3, name: 'Dr. James Wilson', specialty: 'Orthopedics', status: 'Available', color: 'bg-emerald-100 text-emerald-700', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=60' },
];

const DoctorAvailability = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.06)] flex flex-col h-full min-h-[300px]">
      
      {/* Header section — Poppins Heading */}
      <h3 className="text-slate-800 text-[1.2rem] font-bold mb-8 font-poppins">Doctor Availability</h3>

      {/* Doctor list */}
      <div className="space-y-6">
        {doctors.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h4 className="text-slate-900 text-[1rem] font-bold leading-none mb-1.5 font-poppins">{doc.name}</h4>
                <p className="text-slate-500 text-[0.8rem] font-medium leading-none">{doc.specialty}</p>
              </div>
            </div>
            
            <div className={`px-4 py-1.5 rounded-xl text-[0.75rem] font-bold ${doc.color}`}>
              {doc.status}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DoctorAvailability;
