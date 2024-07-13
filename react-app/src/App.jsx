import Button from "./Button";
import Student from "./Student"



function App() {
  return(
    <>
    <Student name="Spongebob" age={23} isStudent={true} school="SHNHS"/>
    <Student name="Patrick" age={23} isStudent={false} school="SHNHS"/>
    <Student name="Squidward" age={23} isStudent={false} school="SHNHS"/>
    <Student name="Sandy" age={23} isStudent={true} school="SHNHS"/>
    {/* button */}
    <Button/>
    </>
  );

}

export default App
