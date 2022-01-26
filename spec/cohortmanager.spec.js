const {CohortManager, Student} = require("../src/cohortmanager.js");


describe("Cohort Tests", () => {
  let cohortManager;

  const studentOne = new Student(1, "Dave", "Smith", "Dddddsmith", "dsmith@gmail.com");
  const studentTwo = new Student(2, "Roger", "Danger", "Rrrrdanger", "dangerranger@gmail.com");
  const studentThree = new Student(3, "Simon", "Haddock", "Haddddddock", "haddock@gmail.com");
  const studentFour = new Student(4, "Albert", "Hedgehog", "Hodgeheg", "hodgeheg@gmail.com");
  const studentFive = new Student(5, "Wilfred", "Igloo", "Iglooooo", "dwigloo@gmail.com");

  beforeEach(() => {
    cohortManager = new CohortManager();

  });

  it("creates new student", () => {
    //setup 
    const expected = studentOne
    //execute 
    const result = cohortManager.createStudent(expected);
    //verify
    expect(result).toEqual([expected]);
  });

  it("creates new cohort", () => {
    //setup 
    const expected = ["Cohort 1"]
    //execute 
    const result = cohortManager.createCohort("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });

  it("can search cohorts by name and return the result", () => {
    //setup 
    const expected = "Cohort 5"
    //execute 
    cohortManager.createCohort("Cohort 1")
    cohortManager.createCohort("Cohort 3")
    cohortManager.createCohort("Cohort 5")
    const result = cohortManager.findCohort("Cohort 5");
    //verify
    expect(result).toEqual(expected);
  });

  it("can search cohorts by name and returns an error if not found", () => {
    //setup 
    const expected = "This cohort does not exist"
    //execute 
    cohortManager.createCohort("Cohort 1")
    cohortManager.createCohort("Cohort 3")
    cohortManager.createCohort("Cohort 5")
    const result = cohortManager.findCohort("Cohort Zebra");
    //verify
    expect(result).toEqual(expected);
  });

  it("can remove cohorts by name", () => {
    //setup 
    const expected = ["Cohort 3", "Cohort 5"]
    //execute 
    cohortManager.createCohort("Cohort 1")
    cohortManager.createCohort("Cohort 3")
    cohortManager.createCohort("Cohort 5")
    const result = cohortManager.removeCohort("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });

  it("can return an error when trying to remove cohorts by wrong name", () => {
    //setup 
    const expected = "This cohort does not exist"
    //execute 
    cohortManager.createCohort("Cohort 1")
    cohortManager.createCohort("Cohort 3")
    cohortManager.createCohort("Cohort 5")
    const result = cohortManager.removeCohort("Cohort Zebra");
    //verify
    expect(result).toEqual(expected);
  });

  it("can add student to cohort by name", () => {
    //setup 
    const expected = ['Cohort 1', studentOne]
    //execute 
    cohortManager.createStudent(studentOne)
    cohortManager.createCohort("Cohort 1")
    
    
    const result = cohortManager.addStudentToCohort("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });

  it("can remove student from cohort by id", () => {
    //setup 
    const expected = ['Cohort 1', studentOne]
    //execute 
    cohortManager.createStudent(studentOne)
    cohortManager.createStudent(studentTwo)
    cohortManager.createCohort("Cohort 1")
    cohortManager.addStudentToCohort("Cohort 1")
    
    const result = cohortManager.removeStudentFromCohort(2);
    //verify
    expect(result).toEqual(expected);
  });

  it("can search for students by ID", () => {
    //setup 
    const expected = studentTwo
    //execute 
    cohortManager.createStudent(studentOne)
    cohortManager.createStudent(studentTwo)
    const result = cohortManager.searchStudent(2);
    //verify
    expect(result).toEqual(expected);
  });

})
