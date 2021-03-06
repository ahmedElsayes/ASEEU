# the goal of this example is to compare the different methodes and see the possibleuses of it
# instance method, class method and static method
# also learning how to automate the generation of new class instances just feeding new employees to the system
import datetime
class employee:
    raise_amt = 1
    # the idea of this step to define the class attributes
    def __init__(self, first, last, salary):
        self.first = first
        self.last = last
        self.email = first + '.' + last + '@gmail.com'
        self.salary = salary

    # an example of using instance method
    def employee_details(self):
        return 'the employee is {} {},his email is {} and get paid a salary of {}'.format(self.first, self.last, self.email, self.salary)
    # update the salary with instance method

    def update_salary(self):
        self.salary = int(self.salary * self.raise_amt)

    # To give an example on using class method to add new employees to the system by creating new instances
    @classmethod
    def from_strgs(cls, emp_strgs):
        first, last, salary = emp_strgs.split('-')
        return cls(first, last, salary)

    # class method to raise the salary by specific percentage
    @classmethod
    def set_raise_amt(cls, amount):
        cls.raise_amt = amount


    # static method to decide if a specific date is a working day or offday
    @staticmethod
    def day_situation(the_date):
        if the_date.weekday() == 5 or the_date.weekday() == 6:
            return 'offday'
        else:
            return 'normal working day'


employee1 = employee('ahmed', 'mostafa', 2000)
employee2 = employee('mahmoud', 'hassan', 2200)
employee3 = employee('hossam', 'ali', 2400)


emp_str1 = 'Ahmed-abdelgawad-1000'
emp_str2 = 'khaled-hady-4555'

new_emp1 = employee.from_strgs(emp_str1)
new_emp2 = employee.from_strgs(emp_str2)

# call methods and define amount of salary raise
amount = 2
employee.set_raise_amt(amount)

employee1.update_salary()
employee2.update_salary()
employee3.update_salary()
# print('raise ratio for employee1: {}/// employee2: {}/// employee3 {}'.format(
#     employee1.raise_amt, employee2.raise_amt, employee3.raise_amt))


# print details of already existing employee
# print(employee1.employee_details())
# print(employee2.employee_details())
# print(employee3.employee_details())

# print details of the new employee
print(new_emp1.employee_details())
print(new_emp2.employee_details())

# testing the static method by picking a random day and see if it is working day or offday
# the_day = datetime.date(2020, 3, 11)
# print(employee1.day_situation(the_day))
