const startingStatRolls = () => {
    const fs = require('fs'); // File system module to log results

    // Function to roll a single die
    const rollDie = () => Math.floor(Math.random() * 6) + 1;

    // Roll 4 dice
    const rolls = Array.from({ length: 4 }, rollDie);

    console.log("Rolling 4d6...");

    // Animation sequence
    let animationFrames = ["🎲", "🎲", "🎲", "🎲"];
    let frameIndex = 0;
    const rollAnimation = setInterval(() => {
        process.stdout.write(`\r${animationFrames[frameIndex % animationFrames.length]} `);
        frameIndex++;
    }, 150);

    setTimeout(() => {
        clearInterval(rollAnimation); // Stop animation
        console.log("\nRolls: ", rolls.join(", "));

        // Sort rolls to pick the top 3
        const topThree = rolls.sort((a, b) => b - a).slice(0, 3);
        const total = topThree.reduce((sum, roll) => sum + roll, 0);

        console.log(`Top 3 Rolls: ${topThree.join(", ")}`);
        console.log(`Total of Top 3: ${total}`);

        // Log the results to a file
        const logEntry = `Rolls: ${rolls.join(", ")} | Top 3: ${topThree.join(", ")} | Total: ${total}\n`;
        fs.appendFileSync('dice_rolls.log', logEntry, 'utf8');
        console.log("Results logged to dice_rolls.log");
    }, 3000); // End animation after 3 seconds
};

// Run the function
startingStatRolls();
