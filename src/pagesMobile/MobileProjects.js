import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../cssMobile/MobileProjects.css';


const circleVariants = {
  left: { x: 0 },
  right: { x: 'calc(70vw -  35vw)' }, // Adjust the value based on your design
};

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y:-50, transition: { duration: 0.6 } }
};

const MobileProjects = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [projects, setProjects] = useState([]);

  const buttonToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const type = isToggled ? 'app' : 'web';
      console.log(type);
      const response = await fetch('http://localhost:3001/api/' + type);

      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, [isToggled]);
  
    return (
      <div className='projectOverlayMobile'>
      <div className='projectsBackgroundMobile'>
        <div className='projectsTitle'> Projects </div>
        <div className='PMContainer'>
          <div className='toggleBar' onClick={buttonToggle}>
            <div className={`leftToggle ${!isToggled ? 'shown' : ''}`}>
              Websites
            </div>
            <div className={`rightToggle ${isToggled ? 'shown' : ''}`}>
              Apps
            </div>
            <motion.div
              className='toggleCircle'
              animate={isToggled ? 'right' : 'left'}
              variants={circleVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </div>
          {projects.map((project, index) => {
            console.log('Project:', project); // Log the entire project object
            return (
              <motion.a
                key={`${project.id}-${isToggled}`} // Change key to trigger re-render
                className='projectMobile'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
              >
                <p className='projectTitle'>{project.name}</p>
              </motion.a>
            );
          })}
          

          <div className='codeSnippetMobile'>
        <div className='codeSnippetM1'>
        <pre>
          <code>
            {`function greetUser(name) {
                        if (name === 'An') {
                            return 'Hello, An!';
                        }
                        return 'Hello stranger!';
                        }

                function reverseString(str) {
                return str.split('').reverse().join('');
                }

                    function isPrime(num) {
                    if (num <= 1) return false;
                    for (let i = 2; i < num; i++) {
                        if (num % i === 0) return false;
                    }
                    return true;
}`}
          </code>
        </pre>
      </div>
      <div className='codeSnippetM2'>
        <pre>
          <code>
            {`
                    function bubbleSort(arr) {
                    let len = arr.length;
                    for (let i = 0; i < len; i++) {
                        for (let j = 0; j < len - 1 - i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        }
                        }
                    }
                    return arr;
                    }

                            function factorial(n) {
                            if (n === 0) return 1;
                            return n * factorial(n - 1);
                            }

                        function fibonacci(n) {
                        if (n <= 1) return n;
                        return fibonacci(n - 1) + fibonacci(n - 2);
                        }

        function isPalindrome(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
}`}
          </code>
        </pre>
      </div>
      <div className='codeSnippetM3'>
        <pre>
          <code>
            {`
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`}
          </code>
        </pre>
      </div>

        </div>
        </div>
      </div>
    </div>
  );
};
  
  export default MobileProjects;