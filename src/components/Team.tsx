import { motion } from "framer-motion";
import { Users, Crown } from "lucide-react";

const founder = {
  name: "Dhruv Singla",
  role: "Managing Director & Founder",
  image: null,
  description: "Visionary leader driving sustainable energy solutions across Punjab"
};

const team = [
  {
    name: "Keshav Goyal",
    role: "Executive Director & CMO",
    fullRole: "Executive Director & Chief Marketing Officer",
    image: null,
  },
  {
    name: "Davinder Kumar",
    role: "Chairperson & Executive Director",
    fullRole: "Chairperson & Executive Director",
    image: null,
  },
  {
    name: "Vishnu Goyal",
    role: "Chief Executive Officer",
    fullRole: "CEO (Chief Executive Officer)",
    image: null,
  },
  {
    name: "Umesh Gupta",
    role: "Chief Financial Officer",
    fullRole: "CFO (Chief Financial Officer)",
    image: null,
  },
  {
    name: "Gurmeet Singh",
    role: "CTO & CLO",
    fullRole: "Chief Technical Officer & Chief Legal Officer",
    image: null,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of visionaries driving sustainable energy solutions across Punjab and beyond
          </p>
        </motion.div>

        {/* Founder Highlight */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative group bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-40 animate-pulse" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border-4 border-primary/40 shadow-2xl">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {/* Crown Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-3 shadow-lg border-2 border-amber-300">
                  <Crown className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  <Crown className="w-3 h-3" />
                  MANAGING DIRECTOR
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-lg md:text-xl text-primary font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Our <span className="text-primary">Partners</span>
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                <span className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together, we're committed to revolutionizing the biomass industry and creating a greener future for India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
