export function CatsIndex({cats, onShow}) {

  return (
    <>
    <h1>All Cats</h1>
      <div className="cards">
      {cats.map(cat => (
        <div key={cat.id} className="card">
        <h2>{cat.name}</h2>
        <p>breed: {cat.breed}</p>
        <p>age: {cat.age}</p>
        <img src={cat.image} alt="" />
        <button onClick={() => onShow(cat)}>More info</button>
      </div>
      ))}
    </div>
    </>
  );
}
