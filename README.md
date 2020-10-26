# ApiGateway
In this repo is being developed the business logic for the app

```
docker build -t apigateway .
docker run -p 5000:5000 \
-e AUTH_URL='ec2-18-206-12-122.compute-1.amazonaws.com' \
-e AUTH_PORT='8000' \
-e COURSES_URL='ec2-3-227-239-199.compute-1.amazonaws.com' \
-e COURSES_PORT='80' \
-e CLASSROOM_URL='ec2-3-238-118-201.compute-1.amazonaws.com' \
-e CLASSROOM_PORT='8080' \
-e NOTAS_URL='ec2-34-239-178-179.compute-1.amazonaws.com' \
-e NOTAS_PORT='3000' \
-e SUBJECT_URL='ec2-3-85-218-20.compute-1.amazonaws.com' \
-e SUBJECT_PORT='4000' \
-e NOTAS_API_URL='ec2-100-26-180-84.compute-1.amazonaws.com' \
-e NOTAS_API_PORT='4000' \
-e ADMINISTRATIVO_URL='ec2-3-227-239-199.compute-1.amazonaws.com' \
-e ADMINISTRATIVO_PORT='8080'
--name gateway \
apigateway

```

**Subject queries**: (after users and courses)
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

**Classroom queries**: (after users and courses)
```
Devuelve la lista de todos los salones
query{
  allClassrooms{
    capacidad
    description
  }
}

Asina un salon a un curso
mutation{
  createAssignement(
    assignement:{
      curso:"5f79e99d11609c1f5fa2132b"
      materia:"español"
      profesor:"5678"
      salon:"5f79e98911609c1f5fa2132a"
      horario:"9:00 am"
    }
  )
}


```

**Auth queries**: (after users and courses)
```
Crea un nuevo usuario EN AUTENTICACION
mutation {
  createUser(user:{
    email: "pruebaemail1@gmail.com",
    password: "PruebaPassword"
  })
}

ELIMINA UN USUARIO DE LA AUTENTICACION
mutation{
  deleteUser(user:{
    userId: "4YC08xxRAleYSbQmm8pcIEUH5m53",
  })
}

Autenticar TOKEN- Solicitar el token al autor
query{
  authRequest(
    token: ""
  )
}

Actualizar datos en AUTENTICACION

mutation{
  updateEmail(
    update:{
      userId: "hPO0nCOSXChKlW9COhZn9Kpqoo73",
      email: "test1111@gmail.com"
    }
  )
}
```
**Get Notas queries**:
```
Devuelve la nota de un estudiante en un periodo especifico
query{
    NotasEstudianteClasePeriodo(
    	datosEstudianteClasePeriodo:{
      estudianteId: 1074187999,
      claseId: 1,
      periodo: 2
    }
    ){
    notasId,
    notasIdEstudiante,
    notastipoNotasId,
    notasValor,
    notasPorcentaje,
    notasPeriodo,
    NotasComentarios,
    tipoNotasId,
    tipoNotasNombre,
    tipoNotasIdClase
  }
}
Devuelve la nota de un estudiante en todos los periodos
query{
    NotasEstudianteClase(
    	datosEstudianteClase:{
      estudianteId: 1074187999,
      claseId: 1
    }
    ){
    notasId,
    notasIdEstudiante,
    notastipoNotasId,
    notasValor,
    notasPorcentaje,
    notasPeriodo,
    NotasComentarios,
    tipoNotasId,
    tipoNotasNombre,
    tipoNotasIdClase
  }
}
```

**Notes queries**: (after users and courses)
```
Se solicitan las estadisticas de un curso, la mayor y la peor nota final
query{
  estadisticasCurso(
    notasIdCurso:{
      notasIdCurso: 1000
    }
  )
  {
    UltimoPuesto
  }
}

Promedio de un estudiante en una materia en un periodo específico
query{
  PromedioEstudianteMateriaPeriodo(
    datosEstudianteMateriaPeriodo:{
      notasIdEstudiante: 1074187055,
      notasIdMateria: 2,
      notasPeriodo: 1
    }
  )
}


query{
  PromedioEstudiante(
    datosEstudiante:{
      notasIdEstudiante: 1074187055
    }
  )
}
```

**Courses queries**: (after users and courses)
```
Devuelve todos los cursos disponibles en la base de datos
query{
  allCourses{
    id
    grade
    letter
  }
}

Devuelve todos los estudiantes disponibles en la base de datos
query{
  allStudents{
    id
    id_course
  }
}

Crea un nuevo estudiante en la base de datos y le asigna a un curso existente por medio de su id
mutation{
  createStudent(student:{
    id:"7",
    id_course:"5f7d65435f4b1effb3719290"
  }){
    course{
      grade
      letter
    }
  }
}

Se solicita la información de un curso especifico
query{
  courseById(id:"5f7d65435f4b1effb3719290"){
    grade
    letter
    id_students
  }
}
```
**Notas Api queries - Ferney **: (after users and courses)
```
Crea una nueva nota, pero el notaTipoNotasId debe existir en la tabla tipoNotas.
mutation{
  createNota(
     notasGestionInput:{
      notaIdEstudiante: "4103999"
      notaTipoNotasId: "3"
      notaValor: 2.8
      notaPorcentaje: 25
      notaPeriodo: 4
      notaComentario: "nueva nota por recuperación"
  	}
  )
}


Devuelve una nota por el id.
query{
  getNotabyId(
    id:1
  )
  {
    notasId
    notasIdEstudiante
    notastipoNotasId
    notasValor
    notasPorcentaje
    notasPeriodo
    notasComentarios
  }
}

Actualizar una nota pasando el id y estos 4 campos.
mutation{
  updateNota(
    id:21
    notasUpdateInput:{
      notaValor: 5.0
      notaPorcentaje: 15
      notaPeriodo: 3
      notaComentario: "esta es la ultima nota modificada"
    }    
  )
}

Borrar una nota pasando el id.
mutation{
  deleteNota(
    id:12
  )
}

Crea una nuevo Tipo nota (nombre, id del curso).
mutation{
  createTipoNota(
     tipoNotasGestionInput:{
      tipoNotasNombre: "parcial Final"
      tipoNotasIdClase: "3"
  	}
  )
}
Devuelve un TipoNota por el id.
query{
  getTipoNotabyId(
    id:3
  )
  {
    tipoNotasId
    tipoNotasNombre
    tipoNotasIdClase
  }
}
Actualizar un TipoNota pasando el id y estos campos.
mutation{
  updateTipoNota(
    id:10
    tipoNotasUpdateInput:{
      tipoNotasNombre: "parcial0"
      tipoNotasIdClase: "3"
    }    
  )
}

Borrar una tipo nota pasando el id.
mutation{
  deleteTipoNota(
    id:12
  )
}


```

