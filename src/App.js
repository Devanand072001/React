import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  var sampleObj = new Object();
  // sampleObj.userName = 'Devanand V';
  sampleObj.firstName = "Devanand";
  sampleObj.lastName = "V";
  sampleObj.age = 20;
  sampleObj.gender = 'male';
  sampleObj.role = 'student';
  var sampleVar1 = "var1";
  var var2 = "var2";
  //  for(var i in sampleObj){
  function displayName() {
    return `${sampleObj.firstName} ${sampleObj.lastName}`
  }
  var dummy = "Lorem Ipsum Dolor";
  var blog = {
    'title': 'Sample title',
    'quote': dummy,
    'caption': 'Someone famous in <cite title="Source Title">Source Title</cite>'
  };

  const tableCss = {
    margin: '5px',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
  };
  return (
    <div className="App" class="text-center">
      <div class="container"><h1>hello world <br></br> Name: {displayName()}</h1>

        <p>Age: {sampleObj['age']}</p>
        <p>Gender: {sampleObj['gender']}</p>
        <p>Destination: {sampleObj['role']}</p>

        <h3 class="display-5">Sample variables: {`${sampleVar1} ${var2}`}</h3></div>


      <div class="container my-5">
        <table class="table  table-hover" style={tableCss}>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Age:</th>
              <th>Gender: </th>
              <th>Destination: </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{displayName()}</td>
              <td >{sampleObj['age']}</td>
              <td>{sampleObj['gender']}</td>
              <td>{sampleObj.role}</td>
            </tr>
            {/* <tr>
            <td scope="row"></td>
            <td></td>
            <td></td>
          </tr> */}
          </tbody>
        </table>
      </div>
      <div class="container my-5">
        <div class="shadow-sm" style={{
          color: 'blue',
          padding: '5px',
          backgroundColor: '#92a8d1',
          borderRadius: '5px',
        }}>
          <p class="display-3">{blog.title}</p>
          <figure class="text-center">
            <blockquote class="blockquote">
              <p>{blog.quote}</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="container my-3">
        <div class="row g-2 bg-info ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
        <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
        </div>
      </div>

      <div class="container overflow-hidden">
  
</div>

      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
      /> */}
    </div>

  );
}

export default App;
