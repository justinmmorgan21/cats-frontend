export function CatsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreate(params, () => event.target.reset());
  }
  return (
    <div>
      <h1>New Cat</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Breed: <input name="breed" type="text" />
        </div>
        <div>
          Age: <input name="age" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}