import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase.config"; // Firebase config

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Card, CardContent } from "./ui/components/card";
import { Button } from "./ui/components/button";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("Projects");
  const [data, setData] = useState({
    services: {},
    projects: {},
    startups: {},
    feedback: {},
  });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    stack: [],
    name: "",
    message: "",
    email: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Firebase
        const servicesSnapshot = await getDocs(collection(db, "services"));
        const projectsSnapshot = await getDocs(collection(db, "projects"));
        const startupsSnapshot = await getDocs(collection(db, "startups"));
        const feedbackSnapshot = await getDocs(collection(db, "feedback"));

        const services = {};
        servicesSnapshot.forEach((doc) => {
          services[doc.id] = doc.data();
        });

        const projects = {};
        projectsSnapshot.forEach((doc) => {
          projects[doc.id] = doc.data();
        });

        const startups = {};
        startupsSnapshot.forEach((doc) => {
          startups[doc.id] = doc.data();
        });

        const feedback = {};
        feedbackSnapshot.forEach((doc) => {
          feedback[doc.id] = doc.data();
        });

        setData({ services, projects, startups, feedback });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    // fetchData();
  }, []);
  const handleDelete = async (id) => {
    const collectionRef = collection(db, currentPage.toLowerCase());
    const docRef = doc(collectionRef, id);
    await deleteDoc(docRef);
    // fetchData();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, currentPage.toLowerCase());
    if (editingId) {
      // Update existing document
      const docRef = doc(collectionRef, editingId);
      await updateDoc(docRef, formData);
    } else {
      // Add new document
      await addDoc(collectionRef, formData);
    }

    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      type: "",
      stack: [],
      name: "",
      message: "",
      email: "",
    });
    // Re-fetch data
    fetchData();
  };

  const handleEdit = (id) => {
    const item = data[currentPage.toLowerCase()][id];
    setFormData(item);
    setEditingId(id);
  };

  const renderForm = () => {
    switch (currentPage) {
      case "Services":
        return (
          <div>
            <h1 className="text-2xl font-bold">Add/Edit Service</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <Button type="submit">
                {editingId ? "Update" : "Add"} Service
              </Button>
            </form>
          </div>
        );
      case "Projects":
        return (
          <div>
            <h1 className="text-2xl font-bold">Add/Edit Project</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Type
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Stack
                <input
                  type="text"
                  name="stack"
                  value={formData.stack.join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stack: e.target.value.split(", "),
                    })
                  }
                />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <Button type="submit">
                {editingId ? "Update" : "Add"} Project
              </Button>
            </form>
          </div>
        );
      // Add forms for Startups and Feedback in a similar way

      case "Startups":
        return (
          <div>
            <h1 className="text-2xl font-bold">Add/Edit Startup</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <Button type="submit">
                {editingId ? "Update" : "Add"} Startup
              </Button>
            </form>
          </div>
        );

      case "Feedback":
        return (
          <div>
            <h1 className="text-2xl font-bold">Add/Edit Feedback</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <Button type="submit">
                {editingId ? "Update" : "Add"} Feedback
              </Button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case "Home":
        return renderHome();
      case "Services":
        return renderServices();
      case "Projects":
        return renderProjects();
      case "Startups":
        return renderStartups();
      case "Feedback":
        return renderFeedback();
      default:
        return <div>Select a page from the sidebar.</div>;
    }
  };
  const renderHome = () => (
    <div>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Name: Nijan Adhikari</p>
      <p>Title: Creative Fullstack Developer</p>
      <p>Tagline: Passionate Full Stack & Native App Developer...</p>
      <p>Bio: Hey, I am Nijan Adhikari, experienced Full Stack Engineer...</p>
    </div>
  );

  const renderServices = () => (
    <div>
      <h1 className="text-2xl font-bold">Services</h1>
      <div className="grid gap-4">
        {Object.entries(data?.services).map(([key, service]) => (
          <Card key={key} className="p-4 border rounded">
            <CardContent>
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-sm text-gray-600">{service.description}</p>
              <Button onClick={() => handleEdit(key)} className="mt-2">
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderProjects = () => (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid gap-4">
        {Object.entries(data?.projects).map(([key, project]) => (
          <Card key={key} className="p-4 border rounded">
            <CardContent>
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p>Type: {project.type}</p>
              <p>Stack: {project.stack.join(", ")}</p>
              <p>Description: {project.description}</p>
              <Button onClick={() => handleEdit(key)} className="mt-2">
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStartups = () => (
    <div>
      <h1 className="text-2xl font-bold">Startups</h1>
      <div className="grid gap-4">
        {Object.entries(data?.startups).map(([key, startup]) => (
          <Card key={key} className="p-4 border rounded">
            <CardContent>
              <h2 className="text-xl font-bold">{startup.name}</h2>
              <p>{startup.description}</p>
              <Button onClick={() => handleEdit(key)} className="mt-2">
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderFeedback = () => (
    <div>
      <h1 className="text-2xl font-bold">Feedback</h1>
      <div className="grid gap-4">
        {Object.entries(data?.feedback).map(([key, message]) => (
          <Card key={key} className="p-4 border rounded">
            <CardContent>
              <p>Name: {message.name}</p>
              <p>Email: {message.email}</p>
              <p>Message: {message.message}</p>
              <p>Timestamp: {new Date(message.timestamp).toLocaleString()}</p>
              <Button onClick={() => handleEdit(key)} className="mt-2">
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <nav>
          {["Home", "Services", "Projects", "Startups", "Feedback"].map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`block w-full text-left py-2 px-4 ${
                  currentPage === page ? "bg-gray-700" : "hover:bg-gray-600"
                }`}
              >
                {page}
              </button>
            )
          )}
        </nav>
      </aside>

      <main className="w-3/4 p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Portfolio CMS</h1>
          <Button
            onClick={() => signOut(auth)}
            className="bg-red-500 text-white"
          >
            Logout
          </Button>
        </header>

        <div className="mb-4 admin-panel">{renderForm()}</div>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
