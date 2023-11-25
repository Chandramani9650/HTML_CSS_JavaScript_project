function Student_Details(name, roll_no,Class, section){
this.name = name
this.roll_no = roll_no
this.Class = Class
this.section = section
console.log(`name: ${this.name}, roll_no: ${this.roll_no}, Class: ${this.Class}`)


this.marks_of_5_subjects = function(){
    let obj = {
        science: 72,
        maths: 75,
        social_science: 79,
        english: 80,
        hindi: 67
    }
    

    console.log(`name: ${this.name}, roll_no: ${this.roll_no}, Class: ${this.Class} section:${this.section} science: ${obj.science}, maths: ${obj.maths}, social_science: ${obj.social_science}, english: ${obj.english}, hindi: ${obj.hindi}`)
}

}
let p = new Student_Details("rajesh",2342,5,"5 C")
p.marks_of_5_subjects()
// console.log(p)