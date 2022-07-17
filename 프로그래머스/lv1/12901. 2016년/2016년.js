function solution(a, b) {
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let dt = new Date(2016, a-1, b)
    return day[dt.getDay()]
}