class CohortManager {
    constructor() {
        this.schoolArray = []
        this.cohortSize = 24
        this.studentList = []
    }

    createCohort(name){
        this.schoolArray.push(name)
        // console.log(this.schoolArray)
        return this.schoolArray
    }

    findCohort(name) {
        for (let i = 0; i < this.schoolArray.length; i++) {
            if(this.schoolArray[i] === name) {
                return this.schoolArray[i]
            } 
        }
       return "This cohort does not exist" 
    }

    isCohortFull(cohortName) {
        for (let i = 0; i < this.cohort.length; i++) {}
    }

    removeCohort(name) {
        for (let i = 0; i < this.schoolArray.length; i++) {
            if(this.schoolArray[i] === name) {
                this.schoolArray.splice(i, 1);
                return this.schoolArray   
            }
            return "This cohort does not exist"
        }
    }

    createStudent(newStudentInstance){
        this.studentList.push(newStudentInstance)
        // console.log(this.studentList)
        return this.studentList
    }

    addStudentToCohort(cohortName){
        for(let i=0; i<this.schoolArray.length; i++){
        if(this.schoolArray[i] === cohortName){
        this.schoolArray.push(this.studentList[i])
                    }
                }
        // console.log("add to cohort", this.schoolArray)
        return this.schoolArray
    }

    removeStudentFromCohort(id) {
        for(let i=0; i<this.schoolArray.length; i++){
            if(this.schoolArray[i].id === id){
            this.schoolArray.slice(this.schoolArray[i])
                        }
                    }
            // console.log("add to cohort", this.schoolArray)
            return this.schoolArray
    }

    searchStudent(id) {
        const searchResult = this.studentList.find((student) => student.studentID === id)
        return searchResult
    }

}

class Student {
    constructor(id, firstName, lastName, github, email) {
        this.studentID = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.githubAccount = github;
        this.emailAddress = email;
    }
}

module.exports = {CohortManager,Student}

