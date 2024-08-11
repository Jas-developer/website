//Learning React Events

//this function will show a notifcation on your browser once it gets clicked!
function FootBall() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}
