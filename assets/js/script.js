const height = 3
const blank_char = ' '
const full_char = '#'


w=2*height-1
for (let i = 0; i < height; i++) {
    full_len = 2*i + 1
    blank_len = (w-full_len)/2
    console.log(blank_len)
    console.log(blank_char * blank_len + full_char *)
}

// bill_amount = Number(prompt("bill amount:\n"))
// tip_percentage = Number(prompt("tip percentage:\n"))
// tip_amount = bill_amount * tip_percentage * 0.01
// total_cost = bill_amount + tip_amount
// console.log(`You tipped: $${tip_amount}\n Your total came to: $${total_cost}`)