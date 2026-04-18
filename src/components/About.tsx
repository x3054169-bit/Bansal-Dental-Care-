import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    "Experienced dentist with 13+ years practice",
    "Patient-focused and transparent approach",
    "Modern equipment and high-quality materials",
    "Clean and hygienic clinic environment",
    "Affordable and reasonable pricing",
    "Painless and smooth procedures"
  ];

  const doctors = [
    {
      name: "Dr. Ashutosh Bansal",
      role: "Sr. Dental Specialist",
      specialty: "13+ Years Experience",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Skilled, polite, and professional dentist known for painless treatments and clear explanations. Dedicated to providing patient-focused dental care."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Artistic Image Layout */}
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 flex flex-col gap-6">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-cream/50 relative group"
                 >
                   <img 
                     src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&h=1000&q=80&fm=webp" 
                     alt="Advanced Dental Diagnostic Unit" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     referrerPolicy="no-referrer"
                     loading="lazy"
                     width="1200"
                     height="1000"
                   />
                   <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                 </motion.div>
                 
                 <div className="flex gap-6 items-start">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="w-1/2 rounded-[40px] overflow-hidden shadow-xl border-4 border-white aspect-square shrink-0"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=600&q=80&fm=webp" 
                        alt="Expert Clinical Precision" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width="600"
                        height="600"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-1/2 flex flex-col gap-6"
                    >
                       <div className="rounded-[30px] overflow-hidden aspect-[4/3] shadow-lg">
                         <img 
                           src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?auto=format&fit=crop&w=600&h=450&q=80&fm=webp" 
                           alt="Dental Equipment Excellence" 
                           referrerPolicy="no-referrer"
                           className="w-full h-full object-cover"
                           loading="lazy"
                         />
                       </div>
                       <div className="bg-brand-accent p-6 rounded-[30px] flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-accent">
                             <CheckCircle2 size={20} />
                          </div>
                          <p className="text-[10px] font-black leading-tight text-brand-primary uppercase tracking-[0.2em]">Certified Hygiene Standards</p>
                       </div>
                    </motion.div>
                 </div>
             </div>
             {/* Decorative Element */}
             <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 border-[40px] border-brand-accent/10 rounded-full -z-10" />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-brand-accent" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent">Trusted Care</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black leading-[1.1] tracking-tight">
                  Expert Care <br/>
                  <span className="font-serif italic text-brand-accent font-light">with Precision</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  At Bansal Dental Care, we prioritize patient comfort and transparent approach above all else. Dr. Ashutosh Bansal, with over 13 years of experience, ensures high-quality dental care with clear explanations and modern techniques.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full transition-transform group-hover:scale-150" />
                    <span className="text-sm font-bold text-brand-primary/70 group-hover:text-brand-primary transition-colors uppercase tracking-widest text-[10px]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Our Doctors Profile Cards */}
              <div className="pt-10 border-t border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif italic text-3xl text-brand-primary">Our Specialist</h3>
                  <div className="h-px flex-1 mx-6 bg-gray-100" />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {doctors.map((doc, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10, backgroundColor: '#fff' }}
                      className="group p-6 rounded-[32px] flex items-center gap-6 transition-all border border-transparent hover:border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] bg-cream/30"
                    >
                      <div className="w-16 h-16 bg-white border border-gray-100 rounded-[22px] overflow-hidden flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:rotate-6">
                        <img 
                          src={doc.image} 
                          alt={doc.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                           <h4 className="font-display font-bold text-brand-primary text-lg">{doc.name}</h4>
                           <div className="h-1 w-1 rounded-full bg-brand-accent" />
                           <span className="text-[9px] font-black tracking-widest text-brand-accent uppercase italic">{doc.specialty}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed font-medium line-clamp-2">{doc.bio}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
