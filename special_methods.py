# in this tutorial we learn how to use special methods to enable a logarithmic and special operations for the objects
class employee:
    def __init__(self, first, last, salary):
        self.first = first
        self.last = last
        self.email = self.first+'.'+self.last+'@gmail.com'
        self.salary = salary

     # an example of using instance method
    def employee_details(self):
        return 'the employee is {} {},his email is {} and get paid a salary of {}'.format(self.first, self.last, self.email, self.salary)

    def __str__(self):
        return "Employee('{}', '{}')".format(self.first, self.last)
    
    def __add__(self, other):
        return self.salary + other.salary
    
    def __len__(self):
        return len('{} {}'.format(self.first, self.last))

employee1 = employee('ahmed', 'mostafa', 2000)
employee2 = employee('mahmoud', 'hassan', 2200)
employee3 = employee('hosaam', 'ali', 2400)

# __add__, __len__, __str__

print(employee1)
print(employee1+employee2)
print(len(employee1))
