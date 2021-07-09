import os

os.chdir('/home/r34p3r/env_nodejs/bookstore/api')
os.system('npm start')

os.chdir('/home/r34p3r/env_nodejs/bookstore/client')
os.system('npm start')

print(os.getcwd())
