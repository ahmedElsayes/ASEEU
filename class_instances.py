# in this tutorial we are just learning how to build the class and to call some instances of it
# first building a class for an employee has first and last name + his salary
class employee:
    def __init__(self, first, last, salary):
        self.first = first
        self.last = last
        self.email = first + '.' + last + '@gmail.com'
        self.salary = salary

    def employee_details(self):
        return 'the employee is {} {}, his email is {} and has salary of {}'.format(self.first, self.last, self.email, self.salary)

employee1 = employee('ahmed', 'abdelgawad', 2000)
employee2 = employee('mostafa', 'hassan', 2500)
employee3 = employee('hussam', 'mahmoud', 3000)

# print(employee.employee_details(employee1))
print(employee1.employee_details())



