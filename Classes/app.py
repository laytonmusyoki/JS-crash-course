class Fruit:
    def __init__(self,name,taste):
        self.name=name
        self.taste=taste
        self.color="green"

        def __str__(self):
            return f"{self.name} is {self.color} in color but very {self.taste}"

x=Fruit("mango","sweet")
y=Fruit("orange","sweet")
print(x.name,x.taste,x.color)
print(y.name,y.taste,y.color)
