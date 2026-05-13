def set_alarm(employed, vacation):
    # Your code here
    if employed == True and vacation == False:
        return True
    else:
        return False


set_alarm(True, True)
set_alarm(False, True)
set_alarm(False, False)
set_alarm(True, False)