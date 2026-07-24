import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [showCourse, setShowCourse] = useState(true);

  // Method 1: Element variable with if-else
  let contentComponent;
  if (activeTab === 'books') {
    contentComponent = <BookDetails />;
  } else if (activeTab === 'blogs') {
    contentComponent = <BlogDetails />;
  } else {
    contentComponent = <CourseDetails />;
  }

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blogger App - Conditional Rendering Portal</h1>
      <p>Demonstrating If-Else, Ternary Operator, Element Variables, and Logical && Operator</p>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('books')} style={{ padding: '8px 15px', marginRight: '10px' }}>
          Show Books (Element Var)
        </button>
        <button onClick={() => setActiveTab('blogs')} style={{ padding: '8px 15px', marginRight: '10px' }}>
          Show Blogs (Element Var)
        </button>
        <button onClick={() => setActiveTab('courses')} style={{ padding: '8px 15px', marginRight: '10px' }}>
          Show Courses (Element Var)
        </button>
        <button onClick={() => setShowCourse(!showCourse)} style={{ padding: '8px 15px', backgroundColor: '#e2e2e2' }}>
          Toggle Course View (Logical &&)
        </button>
      </div>

      <hr />

      {/* Rendering via Element Variable */}
      <h2>1. Element Variable Content:</h2>
      {contentComponent}

      {/* Method 2: Ternary Operator */}
      <h2>2. Ternary Operator Content:</h2>
      {activeTab === 'books' ? <BookDetails /> : <BlogDetails />}

      {/* Method 3: Logical && Operator */}
      <h2>3. Logical && Operator Content:</h2>
      {showCourse && <CourseDetails />}
    </div>
  );
}

export default App;
