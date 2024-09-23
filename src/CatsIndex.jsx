export function CatsIndex({cats}) {

  return (
    <>
    <h1>All Cats</h1>
    <div className="cards">
    {cats.map(cat => (
    <div>
      <h2>{cat.name}</h2>
      <p>breed: {cat.breed}</p>
      <p>age: {cat.age}</p>
      <img src={cat.image} alt="" />
      <button>More info</button>
    </div>
    ))}
    </div>
    </>
  );
}
