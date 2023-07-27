import React ,{Component} from "react";
import CourseForm from "./Component/course-form";
import CourseList from "./Component/Courselist";
class App extends Component {
   state = {
    courses : [
      {name :"hTML" },
      {name : "Css"},
      {name : "JavaScript"},
    ] , 
    current : ""
   }
   
   //deleteCourse
   deleteCourse = (index)=> {
   let courses = this.state.courses;
   courses.splice(index ,1);
   this.setState({   
    courses
   })
   }

   // Update course 
   updateCourse = (e) => {
   this.setState({
   current:e.target.value
})
}

   //addCourse
    addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current})
    this.setState({
      courses,
      current:""
    })
   }

  // editCourse 
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course= courses[index];
     course["name"] =value;
       this.setState({
        courses
       })
  }

  render() {
    const {courses} = this.state;
    const courseList = courses.map((course ,index) => {
      return <CourseList  details={course} key={index} index={index}  deleteCourse= {this.deleteCourse}  editCourse={this.editCourse}/>
    })

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm  current={this.state.current}  updateCourse={this.updateCourse}  addCourse={this.addCourse} />
     <ul>{courseList}</ul> 
      </section>
    );
  }
}
export default App;