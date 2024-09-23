export function CatsShow({ cat} ) {
  console.log("show");
  return (
    <>
    <h1>{cat.name}</h1>
    <span>{cat.breed},&nbsp;&nbsp;</span><span>{cat.age} years old</span>
    <br />
    <img src={cat.image} alt="" />
    </>
  );
}