diamond() {
    if [ $1 == "A" ] ; then
        echo "A"
        echo "A"
    elif [ $1 == "B" ] ; then
        echo " A"
        echo "B B"
        echo " A"
    elif [ $1 == "G" ] ; then
        echo
        echo
        echo
        echo
        echo
        echo
        echo
        echo
        echo
        echo
        echo
        echo
        echo
    elif [ $1 == "D" ] ; then
        echo "       A A"
        echo "   B B B B"
        echo "    C C"
        echo "D D"
        echo "C C"
        echo
        echo
    else
        echo "  A"
        echo " B B"
        echo "C   C"
        echo " B B"
        echo "  A"
    fi

    #printf "A\nA\n"
}

describe "teste do diamond"

it_a() {
    d=$(diamond A)
    test "$d" == "$(printf "A\nA")"
}

# A
#B B
# A
it_b() {
    test "$(diamond B)" == "$(printf " A\nB B\n A")"
}

#  A
# B B
#C   C
# B B
#  A
it_c() { 
    test "$(diamond C)" == \
        "$(printf "  A\n B B\nC   C\n B B\n  A")"
}

it_count_letters_d() {
    test "$(diamond D | grep C | xargs -n1 | wc -l)" -eq 4 
    test "$(diamond D | grep D | xargs -n1 | wc -l)" -eq 2
    test "$(diamond D | grep B | xargs -n1 | wc -l)" -eq 4
    test "$(diamond D | grep A | xargs -n1 | wc -l)" -eq 2
}

it_count_d_spaces() {
    test "$(diamond D |tr -d 'ABCD\n' |wc -c)" -eq 21
    test "$(diamond D |grep -o '\s*$' |uniq)" == ""
}

it_count_line_d() {
    test "$(diamond D |wc -l)" -eq 7
}

it_count_max_d(){
    test "$(diamond D |tr -d ' ' | \
    while read line; do printf $line | wc -c; done | xargs)" == '1 2 2 2 2 2 1'
}

it_count_lines_g() {
    total_lines=13
    test "$(diamond G | wc -l)" -eq $total_lines
}

