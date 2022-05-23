const askReducer = (state ='What kind of questions you need answer?', action) => {
    switch (action.type){
        case 'Who': return state='Any practicing physician may come for assessment in the Physician Health Center, including those who are temporarily restricted from practice or on sabbatical due to a medical condition.';
        case 'Why': return state ='The most common reasons are:To undergo assessment of an active medical condition that may affect the safe return to practice For customized preventive and surveillance examinations For specialized training in resilience, time management and burnout preventionPhysicians who come to the Mayo Clinic Physician Health Center will see a senior physician with specialized skills in evaluating and treating other physicians. This physician leads a cohesive team focused on your particular needs.';
        case 'Can': return state='Although not a primary care program for physicians, the center does coordinate with your local provider to establish a treatment plan and rehabilitative trajectory. You may return to follow up on specific conditions or receive additional training in wellness, dietary modification and exercise in such programs as the Mayo Clinic Healthy Living Program';
        case 'What': return state ='Most preventive services screening assessments are covered by your medical insurance. However, for fitness-for-duty assessments, referrals are frequently covered by a participant\'s employer if used to provide supplemental information to guide work restrictions, impairment clarification or disability determination. Each visit also includes an administrative fee, which allows us to provide premium service by:Collecting medical information before the appointment Streamlining the itinerary Expediting subspecialty evaluations Conducting all medical record reviews';
           
        case 'Where': return state='The Mayo Clinic Physician Health Center is offered at Mayo Clinic, Rochester, Minnesota, in the Gonda Building, located in the center of the campus. Participants are registered discreetly and their professional status recognized by Mayo staff. Customized assessments test essential job functions. These assessments may be done on campus at the Mayo Clinic Multidisciplinary Simulation Center or subspecialty areas. For convenience, each participant is provided a personal locker, as needed.';
        case 'Are': return state ='Due to the program\'s popular demand, the Physician Health Center is accepting as priority physicians practicing outside of the Mayo Clinic campuses in Minnesota, Arizona and Florida. Previously enrolled Mayo Clinic physicians may, on occasion, be seen in the program to assess illness or injury that has the potential to affect their clinical practices. However, Mayo physicians are encouraged to identify and maintain primary care providers within existing programs in Employee and Community Health.';
        default:return state;
    }
};
export default askReducer;