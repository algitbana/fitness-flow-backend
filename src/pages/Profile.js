import React, { useState } from 'react';
import { saveUserProfile } from '../api';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', age: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserProfile(profile)
      .then(() => alert('Profile saved!'))
      .catch((error) => console.error('Error saving profile:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Age"
        value={profile.age}
        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save Profile
      </button>
    </form>
  );
};

export default Profile;
