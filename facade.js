class Students {
  enrollInCourse(student, answer) {}

  addNewStudent(student) {
    return this.enrollInCourse(student);
  }
}

class JSCourseStudent extends Students {
  enrollInCourse({ promo, name }) {
    const answer = `${name}, Вы успешно записаны на курс по JavaScript. Ваш промокод на получение скидки: ${promo}`;
    return answer;
  }
}

class JavaCourseStudent extends Students {
  enrollInCourse({ promo, name }) {
    const answer = `${name}, Вы успешно записаны на курс по Java. Ваш промокод на получение скидки: ${promo}`;
    return answer;
  }
}

class Registry {
  registerInCourse(name, type) {
    const promo = Date.now();
    let student;

    if (type === "JavaScript") {
      student = new JSCourseStudent();
    } else {
      student = new JavaCourseStudent();
    }

    return student.addNewStudent({promo, name})
  }
}

const registry = new Registry()

console.log(registry.registerInCourse('Mr.1', 'JavaScript'))
console.log(registry.registerInCourse('Mr.2', 'JavaScript'))
console.log(registry.registerInCourse('Mr.3', 'JavaScript'))
console.log(registry.registerInCourse('Mr.4', 'Java'))
