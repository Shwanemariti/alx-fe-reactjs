function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
