# Write your MySQL query statement below
select max(salary) as 'SecondHighestSalary' from Employee where salary < any (select salary from Employee);
