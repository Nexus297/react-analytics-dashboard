import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './App.css';

const subjectPerformance = [
  { subject: 'Data Structures', average: 78, highest: 98, lowest: 45 },
  { subject: 'Algorithms', average: 65, highest: 92, lowest: 30 },
  { subject: 'Web Dev', average: 85, highest: 100, lowest: 55 },
  { subject: 'Database', average: 72, highest: 95, lowest: 40 },
  { subject: 'Operating Systems', average: 68, highest: 90, lowest: 35 },
  { subject: 'Computer Networks', average: 74, highest: 96, lowest: 42 },
  { subject: 'Artificial Intelligence', average: 81, highest: 99, lowest: 50 },
  { subject: 'Software Engineering', average: 79, highest: 97, lowest: 48 },
];

const gradeDistribution = [
  { grade: 'S (90-100)', count: 12 },
  { grade: 'A (80-89)', count: 25 },
  { grade: 'B (70-79)', count: 35 },
  { grade: 'C (60-69)', count: 40 },
  { grade: 'D (50-59)', count: 20 },
  { grade: 'E (40-49)', count: 10 },
  { grade: 'F (Fail)', count: 5 },
];

const topStudents = [
  { name: 'Tejas', score: 99 },
  { name: 'Krishna', score: 98 },
  { name: 'Ram', score: 96 },
  { name: 'Rohan', score: 95 },
  { name: 'Juhi', score: 94 },
  { name: 'Rudra', score: 92 },
  { name: 'Parth', score: 91 },
  { name: 'Rahul', score: 89 },
  { name: 'Kirti', score: 88 },
  { name: 'Anvesha', score: 87 },
];

const COLORS = ['#3E5641', '#004D61', '#DAA520', '#FF6F61', '#A2B296', '#B17A50', '#4B0082'];

function App() {
  const [role, setRole] = useState('faculty');

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Class Performance Dashboard</h1>
        <div className="nav-buttons">
          <button className={role === 'faculty' ? 'active' : ''} onClick={() => setRole('faculty')}>Faculty</button>
          <button className={role === 'hod' ? 'active' : ''} onClick={() => setRole('hod')}>HOD</button>
          <button className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}>Student</button>
        </div>
      </nav>

      <div className="dashboard-container">
        {role === 'faculty' && (
          <div className="panel">
            <h2>Faculty View: Top Performers</h2>
            <p>Analyze the highest achieving students in the current batch.</p>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topStudents}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D3C5B3" />
                  <XAxis dataKey="name" stroke="#2C2C2C" />
                  <YAxis stroke="#2C2C2C" />
                  <Tooltip contentStyle={{ backgroundColor: '#FDFBF7', borderColor: '#D3C5B3', color: '#2C2C2C' }} />
                  <Bar dataKey="score" fill="#3E5641" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {role === 'hod' && (
          <div className="panel">
            <h2>HOD View: Subject Comparison</h2>
            <p>Identify strong and weak subjects based on class averages.</p>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D3C5B3" />
                  <XAxis dataKey="subject" stroke="#2C2C2C" />
                  <YAxis stroke="#2C2C2C" />
                  <Tooltip contentStyle={{ backgroundColor: '#FDFBF7', borderColor: '#D3C5B3', color: '#2C2C2C' }} />
                  <Legend wrapperStyle={{ color: '#2C2C2C' }} />
                  <Bar dataKey="average" fill="#3E5641" name="Class Average" />
                  <Bar dataKey="highest" fill="#FF6F61" name="Highest Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {role === 'student' && (
          <div className="panel">
            <h2>Student View: Overall Grade Distribution</h2>
            <p>Understand where you stand compared to the rest of the class.</p>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={gradeDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="count"
                    nameKey="grade"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {gradeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#FDFBF7', borderColor: '#D3C5B3', color: '#2C2C2C' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;