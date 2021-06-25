import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
// import data from "../assets/img/"

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    objRes: any = null;
    getStudentCoursesRes: any = null;
    constructor(private http: HttpClient) {
      
        this.getCourses().subscribe((data:any) => {
            console.log("data",data);
        });
    }

    public getCourses(){
 
        return this.http.get<any[]>("../assets/courses.json");
    }
    public getCoursesByID(id : Number){
        this.getCourses().subscribe((data:any) => {
           for(let obj of data){
               if(obj.CourseId == id){
                this.objRes = obj ;
               }
           }
        });
        return this.objRes ;
    }
    public getAllRequests(){
        return this.http.get("../assets/requests.json");
        // return this.http.get("../assets/img/requests.json/").map( (res: Response) => res[0].products.filter(x=>x.id==StudentId));;
    }


    public getStudentCourses(StudentId : Number){
        this.getAllRequests().subscribe((requests:any) =>{
            for(let req of requests){
                if(req.StudentId == StudentId){
                  this.getStudentCoursesRes = req.Courses;
                }
            }
            
        })
        return this.getStudentCoursesRes ;
    }
}