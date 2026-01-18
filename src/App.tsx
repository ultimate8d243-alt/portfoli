import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { InteractiveGames } from './components/InteractiveGames';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-purple-900/10 to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-blue-900/10 to-transparent pointer-events-none" />
      <Navigation />
      <Hero />
      <Journey />
      <Expertise />
      <Projects />
      <InteractiveGames />
      <Contact />
    </div>
  );
}