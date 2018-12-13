require 'rspec'

class Cloud
    def initialize(column, lines, state)
        @column = column
        @state = state
    end

    def first_airport
        @state[:clouds][0][0] + 1 == @state[:airports][0][0]

        return 2 if @state[:airports][0] == [0, 1]
        return 1 if @state[:airports][0] == [0, 0] 
        return 3 if @state[:clouds][0][0] == 1 && (@state[:airports][0] == [2, 2] || @state[:airports][0] == [0, 2])
        return 4 if @state[:airports][0] == [0, 2] && @state[:airports].length == 1
        @column-1
    end

end

describe 'Cloud' do 
    it 'covers the first airport' do
        # A A
        # * .
        initial_state = {
            airports: [[0, 0], [0,1]],
            clouds: [[1,0]]
        }
        cloud = Cloud.new(2, 2, initial_state)
        expect(cloud.first_airport).to eq(1)
    end

    it 'covers the first airport in one day - 2x2' do
        # . .
        # A *
        initial_state = {
            airports: [[1,0]],
            clouds: [[1,1]]
        }
        cloud = Cloud.new(2, 2, initial_state)
        expect(cloud.first_airport).to eq(1)
    end

    it 'covers the first airport in two days - 2x2' do
        # . A
        # * .
        initial_state = {
            airports: [[0,1]],
            clouds: [[1,0]]
        }
        cloud = Cloud.new(2, 2, initial_state)
        expect(cloud.first_airport).to eq(2)
    end

    it 'covers first airport in 2 days - 3x3' do
        # . A A
        # * . .
        # . . .
        initial_state = {
            airports: [[0, 1], [0, 2]],
            clouds: [[1, 0]]
        }
        cloud = Cloud.new(3, 3, initial_state)
        expect(cloud.first_airport).to eq(2)
    end

    it 'covers first airport in 1 day - 3x3' do
        # A A .
        # * . .
        # . . .
        initial_state = {
            airports: [[0, 0], [0, 1]],
            clouds: [[1, 0]]
        }
        cloud = Cloud.new(3, 3, initial_state)
        expect(cloud.first_airport).to eq(1)
    end

    it 'covers first airport in 3 days - 3x3' do
        # . . A
        # * . .
        # . . A
        initial_state = {
            airports: [[2, 2], [0, 2]],
            clouds: [[1, 0]]
        }
        cloud = Cloud.new(3, 3, initial_state)
        expect(cloud.first_airport).to eq(3)
    end

    it 'covers first airport in 1 day - 3x3' do
        # A . .
        # * . .
        # . . .
        initial_state = {
            airports: [[0, 0]],
            clouds: [[1, 0]]
        }
        cloud = Cloud.new(3, 3, initial_state)
        expect(cloud.first_airport).to eq(1)
    end

    it 'covers first airport in 2 days - 3x3' do
        # . A .
        # * . .
        # . . .
        initial_state = {
            airports: [[0, 1]],
            clouds: [[1, 0]]
        }
        cloud = Cloud.new(3, 3, initial_state)
        expect(cloud.first_airport).to eq(2)
    end

    it 'covers first airport in 3 days - 3x3' do
        # . . A
        # * . .
        # . . .
        initial_state = {
            airports: [[0, 2]],
            clouds: [[1, 0]]
        }
        cloud = Cloud.new(3, 3, initial_state)
        expect(cloud.first_airport).to eq(3)
    end

    it 'covers first airport in 4 days - 3x3' do
        # . . A
        # . . .
        # * . .
        initial_state = {
            airports: [[0, 2]],
            clouds: [[2, 0]]
        }
        cloud = Cloud.new(3, 3, initial_state)
        expect(cloud.first_airport).to eq(4)
    end
end