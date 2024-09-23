export function CatsShow({ cat, onUpdate, onDestroy } ) {
  console.log("show");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(params, cat.id, () => event.target.reset());
  }

  return (
    <>
    <h1>{cat.name}</h1>
    <span>{cat.breed},&nbsp;&nbsp;</span><span>{cat.age} years old</span>
    <br />
    <br />
    <img src={cat.image} alt="" />
    <br />
    <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" defaultValue={cat.name} type="text" />
        </div>
        <div>
          Breed: <input name="breed" defaultValue={cat.breed} type="text" />
        </div>
        <div>
          Age: <input name="age" defaultValue={cat.age} type="text" />
        </div>
        <div>
          Image: <input name="image" defaultValue={cat.image} type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(cat.id)}>Delete</button>
    </>
  );
}