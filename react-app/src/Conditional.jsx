//conditional Rendering

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1> GOAL!</h1>;
}

//parent function
function Goal(props) {
  const isGoal = props.isGoal;

  if (isGoal) {
    return <MadeGoal />;
  } else {
    return <MissedGoal />;
  }
}

function Render() {
  return <Goal isGoal={true} />;
}

Render();

// THE && OPERATOR

function Garage(props) {
  const cars = props.cars;

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage!</h2>}
    </>
  );
}

const cars = ["Ford", "BMW", "AUDI"];

function Main() {
  return (
    <>
      <Garage cars={cars} />
    </>
  );
}

// Learning Ternary Operations
function Goal(props) {
  const isGoal = props.isGoal;

  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function MissedGoal() {
  return <h1>MISSED GOAL!</h1>;
}
