function Employee (name, dept) {
    this.name = name || '';
    this.dept = dept || 'general';
}


function WorkerBee (projs) {

    this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

function Engineer (mach) {
    this.dept = 'engineering';
    this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;


function Engineer (name, projs, mach) {
    this.base = WorkerBee;
    this.base(name, 'engineering', projs);
    this.machine = mach || '';
}
var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
