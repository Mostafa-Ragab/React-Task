import studentsTypes from './students.types';


const INITIAL_STATE = {
    studentList: [
      {
          Name:"Hossam Mokhtar Saad",
          Status:"Intial Acceptance",
          Major:"Medcine"
      },
      {
          Name:"Mohamed Samy Abdelaad",
          Status:"Intial Acceptance",
          Major:"Medcine"
      },
      {
          Name:"Zakaria Hassan Abdellatif",
          Status:"Conditional Acceptance",
          Major:"Medcine"
      },
      {
          Name:"Zakaria Mohamed Zakaria",
          Status:"Intial Acceptance",
          Major:"Medcine"
      },
      {
          Name:"Omr Mukhtar Ismael",
          Status:"Conditional Acceptance",
          Major:"Medcine"
      }
  ]
};
  
  const studentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case studentsTypes.STUDENTS_LIST:
        return {
          ...state,
          studentList: action.payload
        }
      default:
        return state;
    }
  };
  
  export default studentReducer;