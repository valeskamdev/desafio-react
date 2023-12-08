function Container({ children }) {
  return (
    <section style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', padding: '1rem' }}>{ children }</section>
  );
}

export default Container;