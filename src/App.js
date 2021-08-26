// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BlogCards from './BlogCard'

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


  //dynamic elements
  const blogArray = [
    {
      'title': 'Blog title 1',
      'description': ' Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor'
    },
    {
      'title': 'Blog title 2',
      'description': ' Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor'
    },
    {
      'title': 'Blog title 3',
      'description': ' Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor'
    }
  ]
  
  const blogCards = blogArray.map((items) => {
    // console.table(items);
    return (
      <div className="col-lg-4 ">
        <div class="card mx-auto border-dark mb-3" >
          <div class="card-header">Header</div>
          <div class="card-body text-dark">
            <h5 class="card-title">{items.title}</h5>
            <p class="card-text">{items.description}</p>
          </div>
        </div>
      </div>
      // <BlogCards/>
    )
  })
  return (
    <div className="App" class="text-center">
      <div class="container"><h1>hello world <br></br> Name: {displayName()}</h1>

        <p>Age: {sampleObj['age']}</p>
        <p>Gender: {sampleObj['gender']}</p>
        <p>Destination: {sampleObj['role']}</p>

        <h3 class="display-5">Sample variables: {`${sampleVar1} ${var2}`}</h3></div>


      <div class="container my-5">
        <table class="table mx-auto w-75 table-hover" style={tableCss}>
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

      <div className="container">
        <div class="row mx-auto my-auto g-3">
          <div class="col-lg-4">
            <div className="card mx-auto text-white bg-primary   ">

              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">{blogArray[0].title}</h5>
                <p className="card-text">{blogArray[0].description}</p>
              </div>
            </div></div>
          <div class="col-lg-4">
            <div className="card mx-auto text-white bg-secondary " >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">{blogArray[1].title}</h5>
                <p className="card-text">{blogArray[1].description}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-white bg-dark mx-auto w-100" >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">{blogArray[2].title}</h5>
                <p class="card-text">{blogArray[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5 ">
        <div class="display-5 my-5">Dynamic elements</div>
        <div class="row mx-auto my-auto g-3">
          {blogCards}
        </div>
      </div>
    </div>

  );
}

export default App;
