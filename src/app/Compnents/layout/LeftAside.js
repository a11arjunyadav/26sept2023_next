import React from 'react'

export default function LeftAside() {
  return (
        <aside className="col-3 d-grid gap-2 a_he">
            <a href="/Flight">
                <button className="d-block btn a_back rounded-0 a_t">The Flight</button>
            </a>
            <a href="/City">
                <button className="d-block btn a_back rounded-0 a_t">The City</button>
            </a>
            <a href="/Island">
                <button className="d-block btn a_back rounded-0 a_t">The Island</button>
            </a>
            <a href="/Food">
                <button className="d-block btn a_back rounded-0 a_t">The Food</button>
            </a>
        </aside>
  )
}
