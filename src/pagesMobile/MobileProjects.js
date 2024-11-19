import React, { useEffect } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../cssMobile/MobileProjects.css';

const MobileProjects = () => {
  
    useEffect(() => {
  
      const projects = document.querySelectorAll('.projectMobile');
      const downArrow = document.querySelector('.downArrow');
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          } else {
            entry.target.classList.remove('slide-in');
          }
        });
      }, {
        threshold: 0.1
      });
  
      projects.forEach(project => {
        observer.observe(project);
        project.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent the click event from bubbling up to the document
          projects.forEach(p => p.classList.remove('centered'));
          project.classList.add('centered');
        });
      });
  
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
        if (scrollPercentage > 15) {
          downArrow.classList.add('hidden');
        } else {
          downArrow.classList.remove('hidden');
        }
      };
  
      const handleClick = () => {
        smoothScrollToBot(1000);
      };
  
      const handleDocumentClick = () => {
        projects.forEach(p => p.classList.remove('centered'));
      };
  
      downArrow.addEventListener('click', handleClick);
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleDocumentClick);
  
      return () => {
        projects.forEach(project => {
          observer.unobserve(project);
          project.removeEventListener('click', (e) => {
            e.stopPropagation();
            projects.forEach(p => p.classList.remove('centered'));
            project.classList.add('centered');
          });
        });
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);
  
    const smoothScrollToBot = (duration) => {
      const start = window.scrollY;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
      const documentHeight = Math.max(document.body.scrollHeight);
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const destinationOffset = documentHeight;
      const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
      const scroll = (currentTime) => {
          const time = Math.min(1, ((currentTime - startTime) / duration));
          const timeFunction = 1 - Math.pow(1 - time, 3);
          window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  
          if (window.scrollY === destinationOffsetToScroll) {
              return;
          }
  
          requestAnimationFrame(scroll);
      };
  
      scroll(startTime);
    };
  
    return (
      <div className='projectsBackgroundMobile'>
        <button className='downArrow'>
          <i className="icon"><FaAngleDoubleDown /></i>
        </button>
        <div className='projectsMobileContainer'>
          <a className='projectMobile'>
            <p className='projectTitle'>Project</p>
          </a>
          <a className='projectMobile'>
            <p className='projectTitle'>Project</p>
          </a>
          <a className='projectMobile'>
            <p className='projectTitle'>Project</p>
          </a>
          <a className='projectMobile'>
            <p className='projectTitle'>Project</p>
          </a>
          <a className='projectMobile'>
            <p className='projectTitle'>Project</p>
          </a>
          <a className='projectMobile'>
            <p className='projectTitle'>Project</p>
          </a>
        </div>
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
  );
};
  
  export default MobileProjects;