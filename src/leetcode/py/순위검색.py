
def gen_obj(info):
    arr = info.split(" ")
    return {
        "언어": arr[0],
        "직군": arr[1],
        "경력": arr[2],
        소울푸즈: arr[3],
        점수: arr[4],
    }


def solution(info, query):
    answer = []
    table_list = []

    for m in info:
        table_list.append(gen_obj(m))

    print(table_list)
    return answer


def Q():
    pass

# []
