# ApiGateway
In this repo is being developed the business logic from the app


Subject queries: (after users and courses)
```
# Add a subject
mutation{
    postSubject(data: {name: "Test Subject", grade: 8}){
        rows,
        response
  }
}
# Check all and note ID
query{
    getSubjects{
        id,
        name
    }
}
# Add teachers to subject
mutation{
    postTeacher(data: {id_teacher: 4, id_subject:5}){
        rows,
      	response
    }
}
# Check teacher's subjects
query{
    getTeacherSubjects(id: 4){
        id_teacher,
        id_subject
    }
}
```
