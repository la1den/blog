make: Nothing to be done for `default’
================

> While writing make files to compile kernel modules we might come across the error:
>
> ```
> make: Nothing to be done for 'default'.
> ```
>
> The common cause for the error is the lack of tab space before the command. A make rule always has three parts a target, a prerequisite, and the command to generate the target from the prerequisite.
>
> ``` 
> target:prerequisite
>        command
> ```
> 
> For make to be able to differentiate between a command and a target, the command always needs to be prefixed with one tab space. In case we fail to do so then make will not recognize it as a command and throw an error saying that there is no command specified for the target. It is the same error as given above where default is the target.

----------
参考：

https://www.thegeekdiary.com/make-nothing-to-be-done-for-default/

