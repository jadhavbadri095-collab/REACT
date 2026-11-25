
function Student(badrii) {
  return (
    <section>
      <h3>INFORMATION</h3>
      <p>Student name: {badrii.name}</p>
      <p>Student age: {badrii.age}</p>
      <p>Student roll number: {badrii.rollno}</p>
      <p>Student class: {badrii.classs}</p>
      <p>Student mobile: {badrii.mobile}</p>
    </section>
  );
}

function App() {
  return (
    <div>
      <Student
        name="badriii vithal jadhav"
        age={20}
        rollno={36}
        classs="B.sc(computer science)"
        mobile="932237470"
      />
    </div>
  );
}

export default App;
